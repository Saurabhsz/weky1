const Discord = require('discord.js')
module.exports = {
  name: "emoji",
  aliases: ["remoji", `randomemoji`],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..emoji',
  cooldown: 3, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const emo = [
        `😳`,
        `😡`,
        `💔`,
        `🔴`,
        `🟢`,
        `🟠`,
        `📷`,
        `😂`,
        `⬜`,
        `⬛`,
        `😒`,
        `🤔`,
        `😏`,
        `😐`,
        `👍`,
        `😇`,
        `🤨`,
        `🤪`,
        `😜`,
        `😛`,
        `😋`,
        `😙`,
        `😚`,
        `😗`,
        `😘`,
        `🥰`,
        `😍`,
        `😁`,
        `😆`,
        `☺️`,
        `😀`,
        `😗`,
        `😌`,
        `🙂`,
        `😊`,
        `😃`,
        `😅`,

   ]
   var emoji1 = Math.floor(Math.random() * emo.length);
   var emoji = emo[emoji1]
message.channel.send(emoji)
}
}