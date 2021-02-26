module.exports.run = async (client, message, args) => {
    if(message.author.id === client.user.id) return;
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
    
        module.exports.config = {
            name: "math",
            description: "Calculate your question about math",
            usage: "/math",
            accessableby: "Members",
            aliases: ["calculate"]
        }