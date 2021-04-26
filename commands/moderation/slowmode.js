
                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author}, you don't have permission to run this command.\nPermission: \`MANAGE_MESSAGES\``);
  String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

  const time = args[0];
  if(!time) { return message.channel.send(`${message.author}, specify a time.\nUsage: \`.slowmode <time>\``); }
  if(isNaN(time)) { return message.channel.send(`${message.author}, **${time}** is not a number.\nUsage: \`.slowmode <time>\``);  }

  message.channel.setRateLimitPerUser(time)
  message.channel.send(`Slowmode in ${message.channel} set to \`${time.toHHMMSS()}\``);
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'slowmode',
                      description: 'Setting a slowmode.',
                      usage: config.prefix + 'slowmode %s | m | d%',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'moderation',
                  disable: false,
                  cooldown: 1000,
                };
