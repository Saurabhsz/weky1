

const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "achievement",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..achievement',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const Idiot = require("idiotic-api");
        bot.API = new Idiot.Client(process.env.token);
        if(!args[0]) return message.channel.send(`Well you cant get the achievement for nothing`)
        await message.channel.send(new MessageAttachment(
            await client.API.achievement(message.author.displayAvatarURL({ format: "png", size: 32 }), args.slice(0).join(" ")),
            "achievement.png"));
}
}