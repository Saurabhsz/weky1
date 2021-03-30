const { Discord, Collection, MessageEmbed} = require("discord.js")
module.exports = {
    name: "rich",
    aliases: ["lb", "leaderboard"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..rich',
    cooldown: 6, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
      const collection = new Collection()
      try {
      await Promise.all(
        message.guild.members.cache.map(async (member) => {
            const id = member.id
            const bal = await bot.bal(id)
            return bal !== 0
             ? collection.set(id, {
               id,
               bal,
             })
             : null;
          })
      );
      const data = collection.sort((a, b) => b.bal - a.bal).first(10);

      message.channel.send(
        new MessageEmbed()
      .setTitle(`Leaderboard in ${message.guild.name}`)
     .setDescription(
       data.map((v, i) => {
         return `${i+1}. ${bot.users.cache.get(v.id).tag} => **${v.bal} coins**`
       })
     )
      )
      }catch(error){
        message.reply(`Some users was not logged, try again.`)
      }
}}
