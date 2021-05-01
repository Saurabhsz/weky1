const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {

let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
message.channel.send(`**__Uptime:__**\nWeky is online since ${days}**d **${hours}**h **${minutes}**m **${seconds}**s** <:Wek:798365870148681729>`);

};

module.exports.help = {
    aliases: [],
    name: 'uptime',
    description: 'Uptime of da bot',
    usage: config.prefix + 'invite',
};

module.exports.config = {
    args: false,
    restricted: false,
    category: 'utility',
    disable: false,
    cooldown: 1000,
};