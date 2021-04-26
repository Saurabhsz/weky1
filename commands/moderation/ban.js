
                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
  if(!message.member.hasPermission('BAN_MEMBERS')){
        return message.channel.send("You don't have permission to use that command.")
    }
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I dont have permission to ban members.')
    //lets

    let question = message.content.split(" ").slice(2).join(" ");
    const user = message.mentions.users.first();
    //if
    if (!user){
        return message.channel.send('Who you want to ban?')
    }
    if(!question){
        return message.channel.send(`You didnt approved any reasons for me to ban that user`)
    }
    if(user.id === message.author.id) return
    let embed = new Discord.MessageEmbed()
    .setDescription(`<:banhammer:815941402469990440> ${user.username}#${user.discriminator} banning for **${question}**?`)
    const newMessage = await message.channel.send(embed)
               
                  newMessage.react("✅").then(() => newMessage.react("❌"));
              
                  const filter = (reaction, user) => {
                      return ["✅", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
              
                  newMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                  .then(async collected => {
                      const reaction = collected.first();
              
                      if (reaction.emoji.name === "✅") {
                         
                         //embed
                         let embed = new Discord.MessageEmbed()
                         .setDescription(`<:banhammer:815941402469990440> ${user.username}#${user.discriminator} has been banned for **${question}**`)
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

                };
                
                module.exports.help = {
                    aliases: [],
                      name:'ban',
                      description: 'Banning a user/bot.',
                      usage: config.prefix + 'ban @user %reason%',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'moderation',
                  disable: false,
                  cooldown: 1000,
                };