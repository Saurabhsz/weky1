module.exports.run = async (bot, message, args) => {
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
                        if(!message.member.hasPermission('BAN_MEMBERS')){
                            return message.channel.send("You don't have permission to use that command.");
                         }
                         if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('You dont have BAN_MEMBERS permission.')
                         //lets
                         let question = message.content.split(" ").slice(2).join(" ");
                         const user = message.mentions.users.first();
                         //if
                         if (!user){
                             return message.channel.send('Who you want to ban?')
                         }
                         
                         //embed
                         let embed = new Discord.MessageEmbed()
                         .setDescription(`<:banhammer:815941402469990440> ${user.id} has been banned for **${question}**`)
                         message.channel.send(embed);
                         //action
                         message.guild.members.ban(user);
                      } else {
                          let embed = new Discord.MessageEmbed()
                          .setColor('RANDOM')
                          .setTitle("Ok, nothing will happen")
          
                      message.channel.send(embed);
                      }
                  })
                  .catch(collected => {
                      let embed = new Discord.MessageEmbed()
                          .setColor('RANDOM')
                          .setDescription("Ok we will keep this user here.");
          
                      message.channel.send(embed);
                  });
                }
                module.exports.config = {
                    name: "ban",
                    aliases: []
                    }