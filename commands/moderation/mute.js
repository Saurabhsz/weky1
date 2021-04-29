

                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
var ms = require('ms')
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have the correct permissions to use this command.')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send('Member is not found!')
        if(!time) return message.channel.send('Please specify a time.')
        console.log(isNaN(time))
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'Muted')
        if(!role){
            try{
                message.channel.send('Muted role is not found, creating muted role...')

                let muterole = await message.guild.roles.create({
                    data : {
                        name: 'Muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role has successfully been created.')
            } catch (error) {
                console.log(error)
            }
        };
        try{
            if(Member.roles.cache.has(role.id)) return message.channel.send(`${Member.user.tag} has already been muted`)
            await Member.roles.add(role)
            message.channel.send(`${Member.displayName} is now muted`)
    
            setTimeout(async () => {
                await Member.roles.remove(role)
                message.channel.send(`${Member.user.tag} is now unmuted`)
            }, ms(time))
        }catch(err){console.log(err)}

                };
                
                module.exports.help = {
                    aliases: [],
                      name:'mute',
                      description: 'Mute a user/bot.',
                      usage: config.prefix + 'mute @user %time%',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'moderation',
                  disable: false,
                  cooldown: 1000,
                };