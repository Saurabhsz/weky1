
    /* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const { Util, MessageEmbed } = require("discord.js");
const { parse } = require("twemoji-parser");
 if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send('<:downWeky:815202675868172308> | You don\'t have the permissions to manage emojis')
    const emoji = args[0];
    const name = args.slice(1).join(" ");
    if (!emoji) {
      return message.channel.send(
        `Please Give Me A Emoji!`
      );
    }
    if(!name){
        return message.channel.send(`No emoji name specified`)
    }
    try {
      if (emoji.startsWith("https://cdn.discordapp.com")) {
       const fb = await message.guild.emojis.create(emoji, name || name);

        return message.channel.send(fb + ` has been added as "${name}"`);
      }

      const customEmoji = Util.parseEmoji(emoji);

      if (customEmoji.id) {
        const link = `https://cdn.discordapp.com/emojis/${customEmoji.id}.${
          customEmoji.animated ? "gif" : "png"
        }` ;

        await message.guild.emojis.create(
          `${link}`,
          `${name || `${customEmoji.name}`}`
        );
        return message.channel.send(`<:${customEmoji.name}:${customEmoji.id}> has been added as ${name}`);
      } else {
        const foundEmoji = parse(emoji, { assetType: "png" });
        if (!foundEmoji[1]) {
          return message.channel.send("Please provide a valid emoji. I can't work with this bs");
        }

        message.channel.send(
          "Bruv this is a normal emoji what you can use anywhere"
        );
      }
    } catch (e) {
      if (
        String(e).includes(
          "<:downWeky:815202675868172308> | DiscordAPIError: Maximum number of emojis reached (50)"
        )
      ) {
        return message.channel.send(
          "<:downWeky:815202675868172308> | Maximum emoji count reached for this Server!"
        );
      }
    }
};

module.exports.help = {
	aliases: ['ae'],
	name: 'addemoji',
	description: 'Add a emoji',
	usage: config.prefix + 'addemoji %link%',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'utility',
	disable: false,
	cooldown: 1000,
};