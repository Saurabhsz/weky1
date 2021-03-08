module.exports = {
    name: "getout",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..getout',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["BOT_OWNER"],
    async execute(bot, message, args) {
    if (message.author.id !== '778518819055861761'){
        return message.channel.send(`You arent Face `);
    } 
    const Discord = require('discord.js')
              let embed = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setTitle("Shutting down verification")
              .setDescription("Are you sure you want to shut down the bot?")
          
              const newMessage = await message.channel.send(embed);
              
                  newMessage.react("✅").then(() => newMessage.react("❌"));
              
                  const filter = (reaction, user) => {
                      return ["✅", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
              
                  newMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                  .then(async collected => {
                      const reaction = collected.first();
              
                      if (reaction.emoji.name === "✅") {
                          let embed = new Discord.MessageEmbed()
                          .setColor('RANDOM')
                          .setTitle("I'm shutting down...")
          
                      await message.channel.send(embed);
                          process.exit();
                      } else {
                          let embed = new Discord.MessageEmbed()
                          .setColor('RANDOM')
                          .setTitle("Lets pretend that didn't happen.")
          
                      message.channel.send(embed);
                      }
                  })
                  .catch(collected => {
                      let embed = new Discord.MessageEmbed()
                          .setColor('RANDOM')
                          .setTitle("Waiting for your react!")
                          .setDescription("You reacted with neither a thumbs up, nor a thumbs down.");
          
                      message.channel.send(embed);
                  });
                }
                            }