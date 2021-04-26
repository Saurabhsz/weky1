
                       /* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {

        var eh = ['https://cdn.discordapp.com/attachments/830003681994473511/830815206183272448/6.gif'
        ,'https://cdn.discordapp.com/attachments/830003681994473511/830815208070840375/1.gif'
    ,'https://cdn.discordapp.com/attachments/830003681994473511/830815210096820294/2.gif'
    ,'https://cdn.discordapp.com/attachments/830003681994473511/830815212532793434/3.gif',
    'https://cdn.discordapp.com/attachments/830003681994473511/830815217755226122/5.gif',
    'https://cdn.discordapp.com/attachments/830003681994473511/830815215221211166/4.gif']
    const c = Math.floor(Math.random() * eh.length)
      const Discord = require('discord.js')
     message.reply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
        .setTitle(`Vote for me!`)
        .setDescription(`[TOP.GG](https://top.gg/bot/809496186905165834/vote) \n**•**<:common_box:832589376746815499> 3 Common Boxes\n**•** <:spacescript:814122006437167134> 3 Space Scripts\n **•** :coin: 30,000 coins`)
        .setThumbnail(eh[c])
        .addField("Note:", `You need to join our [official server](https://discord.gg/Sr2U5WuaSN) to get the rewards.`)
        .setFooter('xd')
        .setTimestamp()
      )
      
};

module.exports.help = {
    aliases: ['vt'],
      name: 'vote',
      description: 'Vote ples.',
      usage: config.prefix + 'vote',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 1000,
};