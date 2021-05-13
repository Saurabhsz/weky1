const { MessageEmbed } = require("discord.js")
const Guild = require('../../schemas/Guild');
const alt = require("../../functions/altdetector.js");
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
  const guildDB = await Guild.findOne({
    guildId: message.guild.id
  });
  const language = require(`../../data/language/${guildDB.language}.json`)


  let choices = ["none", "kick", "ban"]
  if (!args[0]) return message.channel.send(new MessageEmbed().setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png' })).setDescription(`${message.client.emoji.fail} ${language.aactionNotValidChoice.replace("{allChoices}", choices.join(", "))}`).setFooter('Join Weky! discord.gg/rysqzyVVRK').setTimestamp().setColor('RED'));

  if (!choices.includes(args[0].toLowerCase())) return message.channel.send(new MessageEmbed().setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png' })).setDescription(`${message.client.emoji.fail} ${language.aactionNotValidChoice.replace("{allChoices}", choices.join(", "))}`).setFooter('Join Weky! discord.gg/rysqzyVVRK').setTimestamp().setColor('RED'));

  await alt.findOne({ guildID: message.guild.id }, async (err, db) => {
    if (!db) {
      let newGuild = new alt({
        guildID: message.guild.id,
        altDays: 7,
        altModlog: '',
        allowedAlts: [],
        altAction: args[0].toLowerCase(),
        altToggle: false,
        notifier: false,
      })

      await newGuild.save()
        .catch(err => { console.log(err) })
      return message.channel.send(new MessageEmbed().setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png' })).setDescription(`${message.client.emoji.success} ${language.aactionSuccess.replace("{action}", args[0])}`).setFooter('Join Weky! discord.gg/rysqzyVVRK').setTimestamp().setColor('RED'));
    }
    await db.updateOne({
      altAction: args[0].toLowerCase()
    })

    return message.channel.send(new MessageEmbed().setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png' })).setDescription(`${message.client.emoji.success} ${language.aactionSuccess.replace("{action}", args[0])}`).setFooter('Join Weky! discord.gg/rysqzyVVRK').setTimestamp().setColor('RED'));

  })
};

module.exports.help = {
	aliases: ['alt-action'],
	name: 'aaction',
	description: 'Showing your balance',
	usage: config.prefix + 'altaction kick/none/ban',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 1000,
};
