module.exports = {
    name: "math",
    aliases: ["calculate"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..math',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    const math = require('mathjs');

    const Discord = require('discord.js');
    
            if(!args[1]) return message.channel.send('Please provide a question');
    
            let resp;
    
            try {
                resp = math.evaluate(args.slice(1).join(" "))
            } catch (e) {
                return message.channel.send('Please provide a **valid** question')
            }
    
            const embed = new Discord.MessageEmbed()
            .setColor(0x808080)
            .setTitle('Calculator')
            .addField('Question', `\`\`\`css\n${args.slice(1).join(" ")}\`\`\``)
            .addField('Answer', `\`\`\`css\n${resp}\`\`\``)
    
            message.channel.send(embed);
    
        }
    
            }