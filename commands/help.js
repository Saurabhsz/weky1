const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);
    if(helpArgs[0] === 'games') {
        let em = new Discord.MessageEmbed()
        .addField('🎮 Games', '`trivia`, `fight`, `fasttype`, `tictactoe`')
        return message.channel.send(em)
    }
    if(helpArgs[0] === 'fun') {
        let em = new Discord.MessageEmbed()
        .addField('😂 Fun', '\`corona`, `rc`, `meme`, `simprate`, `ship`, `noobrate`, `fart`, `cringerate`, `8ball`, `avatar`, `google`, `emoji`, `pp`, `trivia`, `ascii`, `reverse`, `say`, `sudo`, `emojify\`\n')
        return message.channel.send(em)
    }
    if(helpArgs[0] === 'currency') {
        let em = new Discord.MessageEmbed()
        .addField('💰 Currency', '`beg`, `buy`, `shop`, `dep`, `with`, `daily`, `bet`, `bal`, `use`, `share`, `inventory`, `pog`, `sell`, `fish`, `turn`, `dice`')
        return message.channel.send(em)
    } 
    if(helpArgs[0] === 'moderation') {
        let em = new Discord.MessageEmbed()
        .addField('⚒️ Moderation', '`purge`, `lockdown`, `endlockdown`, `warn`, `warnings`, `ban`')
        return message.channel.send(em)
    } 
    if(helpArgs[0] === 'utility') {
        let em = new Discord.MessageEmbed()
        .addField('🔩 Utility', '`ping`, `invite`, `uptime`, `math`, `poll`, `report`, `serveremoji`, `addemoji`')
        return message.channel.send(em)
    } 
    if(helpArgs[0] === 'image') {
        let em = new Discord.MessageEmbed()
        .addField('📷 Image', '`drip`, `gray`, `blur`, `facepalm`, `hitler`, `invert`, `gay`, `trigger`, `rip`, `shit`, `trash`, `bird`, `sepia`, `dither`, `80s`, `pet`, `alone`, `muffin`, `toilet`, `turtle` `sock`, `moment`, `doggo`, `awesome`')
        return message.channel.send(em)
    } 
    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
        .setTitle('Weky Bot Help')
        .setURL('https://www.youtube.com/channel/UCZ_cuJGBis0vi6U3bWmvDIg')
        .addField("😂 Fun", "`..help fun`\n")
        .addField("💰 Currency", "`..help currency`\n")
        .addField("⚒️ Moderation", "`..help moderation`\n")
        .addField("🔩 Utility", "`..help utility`\n")
        .addField("🎮 Games", "`..help games`\n")
        .addField("📷 Image", "`..help image`\n")
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/emojis/798365870148681729.png?v=1')
        .setTimestamp()
        
        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** __${command.config.description || "There is no Description for this command."}__
            - **Command's Usage:** __${command.config.usage || "No Usage"}__
            - **Command's Permissions:** __${command.config.accessableby || "Members"}__
            - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
            .setColor('RANDOM')

        message.channel.send(embed);
    }}
}
module.exports.config = {
    name: "help",
    description: "giving a message with all commands in the bot",
    usage: "..help",
    accessableby: "Members",
    aliases: []
}