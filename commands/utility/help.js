const Discord = require("discord.js");
module.exports = {
    name: "help",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..help',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);
    if(helpArgs[0] === 'games') {
        let em = new Discord.MessageEmbed()
        .addField('🎮 Games', '`trivia`, `fight`, `fasttype`, `tictactoe`, `shuffle-guess`, `snake`')
        return message.channel.send(em)
    }
    if(helpArgs[0] === 'fun') {
        let em = new Discord.MessageEmbed()
        .addField('😂 Fun', '\`corona`, `rc`, `meme`, `simprate`, `ship`, `noobrate`, `fart`, `cringerate`, `8ball`, `avatar`, `google`, `emoji`, `pp`, `trivia`, `ascii`, `reverse`, `say`, `sudo`, `emojify`, `rps`, `mcuser`\n')
        return message.channel.send(em)
    }
    if(helpArgs[0] === 'currency') {
        let em = new Discord.MessageEmbed()
        .addField('💰 Currency', '`beg`, `buy`, `shop`, `dep`, `with`, `daily`, `bet`, `bal`, `use`, `share`, `inventory`, `sell`, `fish`, `turn`, `slots`, `hunt`, `walk`')
        return message.channel.send(em)
    } 
    if(helpArgs[0] === 'moderation') {
        let em = new Discord.MessageEmbed()
        .addField('⚒️ Moderation', '`purge`, `lock`, `unlock`, `warn`, `warnings`, `ban`, `lockdown`, `slowmode`, `mute`, `unmute`, `kick`')
        return message.channel.send(em)
    } 
    if(helpArgs[0] === 'utility') {
        let em = new Discord.MessageEmbed()
        .addField('🔩 Utility', '`ping`, `invite`, `uptime`, `poll`, `report`, `serveremoji`, `addemoji`, `stats`, `enlarge`, `config`, `color`')
        return message.channel.send(em)
    } 
    if(helpArgs[0] === 'image') {
        let em = new Discord.MessageEmbed()
        .addField('📷 Image', '`drip`, `gray`, `blur`, `facepalm`, `hitler`, `invert`, `gay`, `trigger`, `rip`, `shit`, `trash`, `bird`, `sepia`, `dither`, `80s`, `pet`, `alone`, `muffin`, `toilet`, `turtle` `sock`, `moment`, `doggo`, `awesome`, `threats`, `magik`, `affect`, `beautiful`, `delete`, `discord`, `notstonks`, `stonks`, `tatoo`, `thomas`, `wanted`, `spank`, `slap`, `kiss`, `bed`, `ad`')
        .setFooter(`All commands can be used in format ..command @user OR ..command`)
        return message.channel.send(em)
    }
    if(helpArgs[0] === 'animals') {
        let em = new Discord.MessageEmbed()
        .addField('🐒 Animals', '`cat`, `dog`, `panda`, `fox`')
        return message.channel.send(em)
    } 
    if(helpArgs[0] === 'level') {
        let em = new Discord.MessageEmbed()
        .addField('⬆️ Level', '`rank`, `lbrank`')
        return message.channel.send(em)
    } 
    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
        .setTitle('Weky Bot Help')
        .setURL('https://www.youtube.com/channel/UCZ_cuJGBis0vi6U3bWmvDIg')
        .addField("😂 Fun", "`..help fun`\n", true)
        .addField("💰 Currency", "`..help currency`\n", true)
        .addField("⚒️ Moderation", "`..help moderation`\n", true)
        .addField("🔩 Utility", "`..help utility`\n", true)
        .addField("🎮 Games", "`..help games`\n", true)
        .addField("🐒 Animals", "`..help animals`\n", true)
        .addField("📷 Image", "`..help image`\n", true)
        .addField('⬆️ Level', "`..help level`\n", true)
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/emojis/798365870148681729.png?v=1')
        .setTimestamp()
        
        message.channel.send(embed);
    }
    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];
        const commandName = helpArgs[0].toLowerCase();
          
        const cmd = bot.commands.get(commandName)
            //+ aliases: [""],
            || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if(cmd) {

            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.name} Command`)
            .setDescription(`
            Command name: **${command.name || "No name"}**\n
            Command usage: **${command.usage || "No Usage"}**\n
            Command aliases: ${command.aliases}\n
            Command cooldown: **${command.cooldown || "0"}s**\n
            Command premium cooldown: **${command.cooldowny || "0"}s**\n
            Command permissions: **${command.permissions || "none"}**
            `)
            .setColor('RANDOM')

        message.channel.send(embed);

    } else {
        return message.reply(`That command doesn't even exist`)
    }
}

}
}