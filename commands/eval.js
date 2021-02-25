const { MessageEmbed } = require("discord.js");
const beautify = require('beautify');
module.exports.run = async (client, message, args) => {
    if(message.author.id === client.user.id) return;
        if (message.author.id !== "778518819055861761") {
            return message.channel.send(`Dude, i\'m pregnant, i quit the Europa services to make the users days happy, im done serving a shit community since 15 years. Do something with your life and leave me fucking alone`)
        }

        if (!args[0]) {
            message.channel.send("Hey Face, what to evaluate :)?")
        }

        try {

            const toEval = args.join(" ");
            const evaluated = eval(toEval);

            const embed = new MessageEmbed()
            .setColor("#00FF00")
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
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
            .setFooter(client.user.username, client.user.displayAvatarURL());

            message.channel.send(embed);

        }
    }
    module.exports.config = {
        name: "eval"
    }