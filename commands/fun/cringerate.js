

        message.channel.send(embed)
            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
            const { MessageEmbed } = require("discord.js")
        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("CRINGE MACHINE")
        .setDescription(`You are ${rate}% cringe <:lol:695581441471545374>`)
        .setTimestamp()
            };
            
            module.exports.help = {
                aliases: ['cr'],
                  name: 'cringerate',
                  description: 'Rating your cringy.',
                  usage: config.prefix + 'cringerate',
              };
            
            module.exports.config = {
              args: false,
              restricted: false,
              category: 'fun',
              disable: false,
              cooldown: 1000,
            };            