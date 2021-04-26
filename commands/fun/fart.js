            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
                message.channel
    .send({embed: {description: "Uh i think **" + message.author.username +"** feels bad man", color: "RANDOM", timestamp: new Date()}})
    .then((msg) => {
      setTimeout(() => {
        msg.edit({embed: {description: `${message.author.username} are u ok? ur green at face 🤢`, color: "RANDOM", timestamp: new Date()}});
      }, 3000);
      setTimeout(() => {
        msg.edit({embed: {description: "dude? why are u vomiting???? 🤮", color: "RANDOM", timestamp: new Date()}});
      }, 6000);
      setTimeout(() => {
        msg.edit({embed: {description: `oh no no NO dont dont do it`, color: "RANDOM", timestamp: new Date()}});
      }, 9000);
      setTimeout(() => {
        msg.edit({embed: {description: `🤮💨`, color: "RANDOM", timestamp: new Date()}});
      }, 12000);
      setTimeout(() => {
        msg.edit({embed: {description: "🤮💨💨", color: "RANDOM", timestamp: new Date()}});
      }, 13000);
      setTimeout(() => {
        msg.edit({embed: {description: "🤮💨💨💨", color: "RANDOM", timestamp: new Date()}});
      }, 14000);
      setTimeout(() => {
        msg.edit({embed: {description: "🤮💨💨💨💨", color: "RANDOM", timestamp: new Date()}});
      }, 15000);
      setTimeout(() => {
        msg.edit({embed: {description: "🤮💨💨💨💨💨", color: "RANDOM", timestamp: new Date()}});
      }, 16000);
      setTimeout(() => {
        msg.edit({embed: {description: "🤮💨💨💨💨💨💨", color: "RANDOM", timestamp: new Date()}});
      }, 17000);
      setTimeout(() => {
        msg.edit({embed: {description: "the world have been expoled since " + `${message.author.username} has been farted on all. 👼👼`, color: "RANDOM", timestamp: new Date()}});
      }, 20000);
    });
            };
            
            module.exports.help = {
                aliases: [],
                  name: 'fart',
                  description: 'Fart.',
                  usage: config.prefix + 'fart',
              };
            
            module.exports.config = {
              args: false,
              restricted: false,
              category: 'fun',
              disable: false,
              cooldown: 1000,
            };
            
