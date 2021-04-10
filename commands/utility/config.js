const Discord = require("discord.js");
module.exports = {
    name: "config",
    aliases: ["panel"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..config',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);
    if(helpArgs[0] === 'chatbox') {
        if(args[1] === 'on'){
            const prefixModel = require('../../schemas/Guild')
            if(!message.member.hasPermission('MANAGE_CHANNELS')){
                return message.channel.send(":x: | You don't have permission to use that command\n \`Required Permission\`: **MANAGE_CHANNELS**");
             }
            
            const channel = message.mentions.channels.first()
            if (!args[2]) return message.channel.send('Incorrect format\nExample: `..config chatbox on #weky`');
            if(!channel) return message.channel.send('Incorrect format\nExample: `..config chatbox on #weky`');
            
            message.channel.send(`The chatbox channel has been setted to ${channel}`);
            
                const data = await prefixModel.findOneAndUpdate({
                    chatbox_channel: channel.id,
                    GuildID: message.guild.id
                })
            data.save()
        } else if(args[1] === 'off'){
            const prefixModel = require('../../schemas/Guild')
            if(!message.member.hasPermission('MANAGE_CHANNELS')){
                return message.channel.send(":x: | You don't have permission to use that command\n \`Required Permission\`: **MANAGE_CHANNELS**");
             }
            
            const channel = message.mentions.channels.first()
            if (!args[2]) return message.channel.send('Incorrect format\nExample: `..config chatbox off #weky`');
            if(!channel) return message.channel.send('Incorrect format\nExample: `..config chatbox off #weky`');
            
            message.channel.send(`The chatbox channel has been removed from ${channel}`);
            
                const data = await prefixModel.findOneAndUpdate({
                    chatbox_channel: null,
                    GuildID: message.guild.id
                })
            data.save()
        } else {
            return message.channel.send('Incorrect format\nExample: `..config chatbox (on || off) #weky`');
        }
        
    }
    if(helpArgs[0] === 'prefix') {
        const prefixModel = require('../../schemas/Guild')
        if(!message.member.hasPermission('MANAGE_MESSAGES')){
            return message.channel.send("<:error:757973233663344652> | You don't have permission to use that command\n \`Required Permission\`: **MANAGE_MESSAGES**");
         }
        
        
        if (!args[1]) return message.channel.send('Incorrect format\nExample: `..config prefix {newPrefix}');
        
        if (args[1].length > 5) return message.channel.send('Your new prefix must be under \`5\` characters!')
        if(args[2]) return message.channel.send(`The prefix cannot be a full word. Means your prefix cannot include SPACE or 2 arguments.`)
        
        message.channel.send(`The new prefix has been setted to **\`${args[1]}\`**`);
        
            const data = await prefixModel.findOneAndUpdate({
                prefix: args[1],
                GuildID: message.guild.id
            })
            data.save();
    }
    if(helpArgs[0] === 'automemechannel') {
        if(args[1] === 'on'){
            const prefixModel = require('../../schemas/Guild')
            if(!message.member.hasPermission('MANAGE_CHANNELS')){
                return message.channel.send(":x: | You don't have permission to use that command\n \`Required Permission\`: **MANAGE_CHANNELS**");
             }
            
            const channel = message.mentions.channels.first()
            if (!args[2]) return message.channel.send('Incorrect format\nExample: `..config automemechannel on #weky`');
            if(!channel) return message.channel.send('Incorrect format\nExample: `..config automemechannel on #weky`');
            
            message.channel.send(`The auto meme channel has been setted to ${channel}\nThere will be a new meme every 10 minutes`);
            
                const data = await prefixModel.findOneAndUpdate({
                    automeme_channel: channel.id,
                    GuildID: message.guild.id
                })
            data.save()
        } else if(args[1] === 'off'){
            const prefixModel = require('../../schemas/Guild')
            if(!message.member.hasPermission('MANAGE_CHANNELS')){
                return message.channel.send(":x: | You don't have permission to use that command\n \`Required Permission\`: **MANAGE_CHANNELS**");
             }
            
            const channel = message.mentions.channels.first()
            if (!args[2]) return message.channel.send('Incorrect format\nExample: `..config automemechannel off #weky`');
            if(!channel) return message.channel.send('Incorrect format\nExample: `..config automemechannel off #weky`');
            
            message.channel.send(`The auto meme channel has been removed from ${channel}`);
            
                const data = await prefixModel.findOneAndUpdate({
                    automeme_channel: null,
                    GuildID: message.guild.id
                })
            data.save()
        } else {
            return message.channel.send('Incorrect format\nExample: `..config automemechannel (on || off) #weky`');
        }
    }
    if(helpArgs[0] === 'level') {
        if(args[1] === 'on'){
            const prefixModel = require('../../schemas/Guild')
            if(!message.member.hasPermission('MANAGE_MESSAGES')){
                return message.channel.send(":x: | You don't have permission to use that command\n \`Required Permission\`: **MANAGE_MESSAGES**");
             }
            
            message.channel.send(`Leveling has been setted to **on**`);
            
                const data = await prefixModel.findOneAndUpdate({
                    leveling: 'true',
                    GuildID: message.guild.id
                })
            data.save()
        } else if(args[1] === 'off'){
            const prefixModel = require('../../schemas/Guild')
            if(!message.member.hasPermission('MANAGE_MESSAGES')){
                return message.channel.send(":x: | You don't have permission to use that command\n \`Required Permission\`: **MANAGE_MESSAGES**");
             }
            
            message.channel.send(`Leveling has been setted to **off**`);
            
                const data = await prefixModel.findOneAndUpdate({
                    leveling: 'false',
                    GuildID: message.guild.id
                })
            data.save()
        } else {
            return message.channel.send('Incorrect format\nExample: `..config level (on || off)`');
        }
    }
    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
        .setTitle('Weky\'s Config Panel')
        .setURL('https://www.youtube.com/channel/UCZ_cuJGBis0vi6U3bWmvDIg')
        .addField("🗳️ Chat Box", "`..config chatbox`\n", true)
        .addField("🌝 Prefix", "`..config prefix`\n", true)
        .addField("🧐 Auto Meme Channel", "`..config automemechannel`\n", true)
        .addField("⬆️ Level", "`..config level`\n", true)
        .setTimestamp()
        
        message.channel.send(embed);
    }
    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
}
}