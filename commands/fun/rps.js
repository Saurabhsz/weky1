const discord = require("discord.js")
module.exports = {
    name: "rps",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..rps',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {   
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
        }}