
                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
 if(!message.member.hasPermission('KICK_MEMBERS')){
        return message.channel.send("You don't have permission to use that command.")
    }
    if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('I dont have permission to ban members.')
    //lets

    let question = message.content.split(" ").slice(2).join(" ");
    const user = message.mentions.users.first();
    //if
    if (!user){
        return message.channel.send('Who you want to kick?')
    }
    if(!question){
        return message.channel.send(`You didnt approved any reasons for me to kick that user`)
    }
    if(user.id === message.author.id) return
    if(!user.kickable) return;
    let embed = new Discord.MessageEmbed()
    .setDescription(`${user.username}#${user.discriminator} kicking for **${question}**?`)
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
                         .setDescription(`${user.username}#${user.discriminator} has been kicked for **${question}**`)
                         message.channel.send(embed);
                         //action
                         message.guild.members.kick(user);
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
                      name:'kick',
                      description: 'Kicking a user/bot.',
                      usage: config.prefix + 'kick @user %reason%',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'moderation',
                  disable: false,
                  cooldown: 1000,
                };