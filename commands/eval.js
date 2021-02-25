const { MessageEmbed } = require("discord.js");
const beautify = require('beautify');
module.exports.run = async (bot, message, args) => {
        if (message.author.id !== "778518819055861761") {
            return message.channel.send(`Dude, i\'m pregnant, i quit the Europa services to make the users days happy, im done serving a shit community since 15 years. Do something with your life and leave me fucking alone`)
        }

        if (!args[1]) {
            message.channel.send("Hey Face, what to evaluate :)?")
        }

        try {

            const toEval = args.slice(1).join(" ");
            const evaluated = eval(toEval);

            const embed = new MessageEmbed()
            .setColor("#00FF00")
            .setTimestamp()
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTitle("Eval")
            .addField("To evaluate", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
            .addField("Evaluated", `\`${evaluated}\``)
            .addField("Type of:", typeof (evaluated));

            message.channel.send(embed);

        }
         catch (e) {
            const embed = new MessageEmbed()
            .setColor("#FF0000")
            .setTitle(":x: Error!")
            .setDescription(e)
            .setFooter(bot.user.username, bot.user.displayAvatarURL());

            message.channel.send(embed);

        }
    }
    module.exports.config = {
        name: "eval",
        description: "Nothing to see here",
        usage: "/eval",
        accessableby: "Members",
        aliases: []
    }