            /* eslint-disable no-unused-vars */
            const discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
            let embed = new discord.MessageEmbed()
		.setTitle("RPS GAME")
		.setDescription("```Add a reaction to one of these emojis to play the game!```")
		.setTimestamp()
		let msg = await message.channel.send(embed)
		await msg.react("✊")
		await msg.react("✂")
		await msg.react("📄")

		const filter = (reaction, user) => {
            return ['✊', '✂', '📄'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['✊', '✂', '📄']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("RESULT")
        		.addField("Your choice", `${reaction.emoji.name}`)
        		.addField("My choice", `${me}`)
			await msg.edit(result)
        		if ((me === "✊" && reaction.emoji.name === "✂") ||
                (me === "📄" && reaction.emoji.name === "✊") ||
                (me === "✂" && reaction.emoji.name === "📄")) {
                    message.reply("**You lost !**");
            } else if (me === reaction.emoji.name) {
                return message.reply("**It's a tie!**");
            } else {
                return message.reply("**You won!**");
            }
        })
        .catch(collected => {
                message.reply('Process has been cancelled since you did not respond in time!');
            })
            };
            
            module.exports.help = {
                aliases: ['rps'],
                  name: 'rockpaperscissors',
                  description: 'Playing RPS.',
                  usage: config.prefix + 'rps',
              };
            
            module.exports.config = {
                args: false,
                restricted: false,
                category: 'fun',
                disable: false,
                cooldown: 1000,
            };
            
