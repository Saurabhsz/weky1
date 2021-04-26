            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
            const { MessageEmbed } = require("discord.js")

        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("SIMP MACHINE")
        .setDescription(`You are ${rate}% simp 😳`)
        .setTimestamp()

        message.channel.send(embed)
            };
            
            module.exports.help = {
                aliases: ['sr'],
                  name: 'simprate',
                  description: 'Rating your simpy.',
                  usage: config.prefix + 'simprate',
              };
            
            module.exports.config = {
              args: false,
              restricted: false,
              category: 'fun',
              disable: false,
              cooldown: 1000,
            };
            
