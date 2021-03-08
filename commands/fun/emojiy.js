
module.exports = {
  name: "emojify",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..emojify',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    const discord = require("discord.js");
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

    if(!args[1]){
        return message.channel.send(`What to emojify jeez`)
    }
  message.channel.send(args.slice(1).join(" ").split('').map(c => mapping[c] || c).join(''));

      }}