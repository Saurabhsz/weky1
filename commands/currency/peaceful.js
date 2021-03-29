module.exports = {
    name: "peaceful",
    aliases: ["peace"],
    dmOnly: false,
    guildOnly: true,
    usage: '..peaceful on || off',
    cooldown: 21600,
    cooldown: 200,
    guarded: true,
    permissions: ["NONE"],
    async execute(bot, message, args) {
if(args[0] === 'on'){
    if(bot.item(message.author.id, "Peaceful") === 1) return message.reply(`Now because ur a mf that enabled peaceful mode and then re-enabled wait more 6h`);
    message.channel.send(`<:good:821393129999171626> Enabled peaceful mode`);
    bot.addItem(message.author.id, "Peaceful", 1)
} else if(args[0] === 'off'){
    if(bot.item(message.author.id, "Peaceful") === 0) return message.reply(`Now because ur a mf that disabled peaceful mode and then re-disabled wait more 6h`);
    message.channel.send(`<:offline:821392620982632489> Disabled peaceful mode`);
bot.removeItem(message.author.id, "Peaceful", 1)
} else {
    return message.channel.send('Incorrect format\nExample: `..peaceful (on || off)`\n Sorry wait 6h :wink:');
}
}}