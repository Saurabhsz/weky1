const Discord = require('discord.js');
module.exports = {
    name: "leaderboardrank",
    aliases: ["lbrank", 'lbr'],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..lbrank',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const db = require('../../schemas/Guild').findOne({ GuildID: message.guild.id}, async (err, data) => {

        if(data.leveling === "1") {
message.reply(`Loading...`).then(m => m.delete({timeout: 3000}));
const Levels = require("discord-xp");
const Canvas = require('canvas');
    const canvas = Canvas.createCanvas(867, 892);
    const ctx = canvas.getContext('2d');
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 4);
    const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard);     
    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/795647180995559434/811623870808588309/unknown_1.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.font = 'normal normal bold 30px Arial';
	ctx.fillStyle = '#ffffff';
    ctx.fillText(`${lb.join("\n")}`, canvas.width / 3.0, canvas.height / 5.0);
	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `lb.jpg`);
    message.channel.send(attachment);
        } else {
            return message.reply(`Some mod turned leveling off or didnt even turned it on :rage:`)
        }
    })
}
}