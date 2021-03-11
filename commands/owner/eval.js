const { MessageEmbed } = require("discord.js");
const beautify = require('beautify');
module.exports = {
    name: "eval",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..eval',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["BOT_OWNER"],
    async execute(bot, message, args) {
        if (message.author.id === "619498919763640330" || message.author.id === "778518819055861761") {
            if (!args[0]) {
                message.channel.send("Hey Face, what to evaluate :)?")
            } else
    
            try {
    
                const toEval = args.slice(0).join(" ");
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
        } else {
            return message.channel.send(`Dude, i\'m pregnant, i quit the Europa services to make the users days happy, im done serving a shit community since 15 years. Do something with your life and leave me fucking alone`)
        }

        
    }
}