const warns = require("../schemas/wanings");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    return;
}
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
  if (!user) return message.reply(`No user specified!`);
    warns.find(
      { GuildID: message.guild.id, UserID: user.id },
      async (err, data) => {
        if (err) console.log(err);
        if (!data.length)
          return message.reply(
            `${user.user.tag} doesn\`t have any warnings in this server.`
          );
        let Embed = new MessageEmbed()
          .setTitle(`${user.user.tag}'s warns in ${message.guild.name}.. `)
          .setDescription(
            data.map((d) => {
              return d.Punishments.map(
                (w, i) =>
                  `${i} - \`Moderator:\` ${
                    message.guild.members.cache.get(w.Moderator).user.tag
                  } \`Reason:\` ${w.Reason}`
              ).join("\n");
            })
          );
          message.reply(Embed);
      }
    );
  }
  
  module.exports.config = {
    name: "warnings",
    description: "shows someone's warnings",
    usage: "..warnings @user",
    accessableby: "Members",
    aliases: ["warns"]
}