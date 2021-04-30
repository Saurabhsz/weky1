

                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
                    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
                    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
                    const time = args[1]
                    if(!Member) return message.channel.send('Member is not found.')
                    if(!time) return message.channel.send('Please specify a time.')
                    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
                    if(!role) {
                        try {
                            const mf = await message.channel.send('Muted role is not found, creating role ...')
            
                            let muterole = await message.guild.roles.create({
                                data : {
                                    name : 'muted',
                                    permissions: []
                                }
                            });
                            message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                                await channel.createOverwrite(muterole, {
                                    SEND_MESSAGES: false,
                                    ADD_REACTIONS: false
                                })
                            });
                            message.channel.send('Muted role has sucessfully been created.').then(async() => message.delete())
                        } catch (error) {
                            console.log(error)
                        }
                    };
                    let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
                    if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
                    await Member.roles.add(role2)
                    message.channel.send(`${Member.displayName} is now muted.`)
            
                    setTimeout(async () => {
                        await Member.roles.remove(role2)
                        message.channel.send(`${Member.displayName} is now unmuted`)
                    }, ms(time))
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