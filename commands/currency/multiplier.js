module.exports = {
  name: "multiplier",
  aliases: ["multi"],
  dmOnly: false,
  guildOnly: true,
  usage: '..multiplier',
  cooldown: 6,
  cooldowny: 3,
  guarded: true,
  permissions: ["NONE"],
  async execute(bot, message, args) {
const Discord = require('discord.js')
let i;
let e = 0
const inventory = require("../../schemas/inventory")
inventory.findOne({User: id},(err, b) => {
  if(!b) {
bot.createProfile(id)
  }
if(b.BoosterEffect !== 0) {i += 'Booster effect - 10%\n'; e += 10};
if(message.guild.id === '830003680983646278') {i += 'Commands ran in official server - 15%\n'; e += 15};
if (message.channel.name.includes('🌝')) {i += 'Channel name includes 🌝 - 1%\n'; e += 1};
if (message.channel.name.includes('weky')) {i += 'Channel name includes `Weky` - 1%\n'; e += 1};
message.reply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
  .setTitle(`Total: ` +e + '%')
  .setDescription(i)
  .setFooter('xd')
  .setTimestamp()
)
})}}