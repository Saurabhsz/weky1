const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
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
  module.exports.config = {
    name: "emoji",
    description: "sends a random discord emoji",
    usage: "..emoji",
    accessableby: "Members",
    aliases: ["randomemoji"]
}