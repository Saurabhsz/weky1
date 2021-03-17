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
        const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');
const { shortenText } = require('../../util/Canvas');
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Minecraftia.ttf'), { family: 'Minecraftia' });
		const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'achievement.png'));
		const canvas = createCanvas(base.width, base.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(base, 0, 0);
		ctx.font = '17px Minecraftia';
		ctx.fillStyle = '#ffff00';
		ctx.fillText('Achievement Get!', 60, 40);
		ctx.fillStyle = '#ffffff';
		ctx.fillText(shortenText(ctx, text, 230), 60, 60);
		return msg.say({ files: [{ attachment: canvas.toBuffer(), name: 'achievement.png' }] });
}
}