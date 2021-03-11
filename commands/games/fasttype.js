const Discord = require('discord.js')
const txtgen = require('txtgen')
const ms = require('ms')
const inGame = new Set()
module.exports.config = {
    name: "fasttype",
    aliases: ["typefast"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..fasttype',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const filter = m => m.author.id === message.author.id
        if (inGame.has(message.author.id)) return
        inGame.add(message.author.id)
        for (i = 0; i < 25; i++) {
            const time = Date.now()
            let sentence = ''
            let ogSentence = txtgen.sentence().toLowerCase().split('.').join('').split(',').join('')
            ogSentence.split(' ').forEach(argument => {
                sentence += '`' + argument.split('').join(' ') + '` '
            })
            message.reply(`**Write the following message (You have 50s seconds!)**:\n${sentence}`)
            try {
                msg = await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 50000,
                    errors: ['time']
                })
            } catch (ex) {
                message.reply('Time\'s up!')
                inGame.delete(message.author.id)
                break
            }
            if (['cancel', 'end'].includes(msg.first().content.toLowerCase().trim())) {
                message.channel.send('Ended!')
                inGame.delete(message.author.id)
                break
            } else if (msg.first().content.toLowerCase().trim() === ogSentence.toLowerCase()) {
                message.channel.send(`Good job!\nIt took you ${ms(Date.now() - time, {long: true})} to type it!`)
            } else {
                message.channel.send('You failed!')
                inGame.delete(message.author.id)
                break
            }

            if (i === 25) {
                message.reply('GG! You win!')
                inGame.delete(message.author.id)
                break
            }
        }
}
}