  
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const path = require('path');
const checkifalreadyplaying = new Discord.Collection();
module.exports.run = async (client, message, args, utils, data) => {
	const channel = message.member.voice.channel;
	if(!channel) return message.channel.send('Please connect to a voice channel to use soundboard');
	channel.join().then(async connection => {
		const dispatcher = connection.play(path.join(__dirname + '/audio/error.mp3'));
		const e = await message.react('🎙️');
		dispatcher.on('speaking', speaking => {
			if(!speaking) {
        channel.leave();
        e.remove()
            }
		});
	}).catch(err => console.log(err));
};

module.exports.help = {
	aliases: ['err'],
	name: 'error',
	description: 'Make a "error" sound',
	usage: '..error',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'soundboard',
	cooldown: 5000,
	disable: false,
};