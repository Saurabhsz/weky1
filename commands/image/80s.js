module.exports = {
    name: "80s",
    aliases: ["80seconds"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..8ball',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
const member = message.mentions.members.first() || message.member;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att = `https://api.monkedev.com/canvas/80s?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`
    const attachment = new Discord.MessageAttachment(att , `80s.jpg`);
    message.channel.send(attachment);
}
}