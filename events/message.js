const Discord = require('discord.js');
const utils = require('../util/utils');
const config = require('../util/config.json');
const chatbase = 'https://api.affiliateplus.xyz/api';
const fetch = require('node-fetch');
const cmdhook = new Discord.WebhookClient(process.env.command_webhook_id, process.env.command_webhook_token);
const errhook = new Discord.WebhookClient(process.env.err_webhook_id, process.env.err_webhook_token);

module.exports = async (client, message) => {
	const Levels = require('discord-xp')
Levels.setURL(process.env.MONGO)
var num;
	if(message.channel.id === '830003681402683415') {
		num = 20
		}else{
		num = 10
		}
    const db = require('../schemas/Guild').findOne({ GuildID: message.guild.id}, async (err, data) => {
if(!data) return;
      if(data.leveling === "1") {
    const randomXp = Math.floor(Math.random() * num) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
if(user.level === 5){
  message.member.roles.add("830003680991510648")
} else if(user.level === 10){
  message.member.roles.remove("830003680991510648")
  message.member.roles.add("830003680991510649")
} else if(user.level === 15){
  message.member.roles.remove("830003680991510649")
  message.member.roles.add("830003680991510650")
} else if(user.level === 20){
  message.member.roles.remove("830003680991510650")
  message.member.roles.add("830003680991510651")
}
		message.channel.send(
			new Discord.MessageEmbed()
		.setTitle('Level Up')
		.setDescription(`
		You have been upgraded to level ${user.level}!
		`)
		.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
		.setColor('RANDOM')
		.setFooter(`..lbrank for leaderboard!`)
		.setTimestamp()
);
    }
  }else return
  })
  const Money = require('../schemas/Money')
  Money.findOne({
    id: message.author.id
  }, (err,data) => {
    if(err) console.log(err);
    if(!data){
      newD = new Money({
        id: message.author.id
      });
    } else {
    const thesame = data.Bank >= data.space
    if(thesame){
      data.Wallet += data.Bank - data.space
      data.Bank -= data.Bank - data.space
      data.save()
    }
  }
})
	//                                               -- Message Event Function --
	if (!message.guild) return;


	if (message.author.bot) return;

	// Fetch database

	const guildDB = await client.data.getGuildDB(message.guild.id);
	const userDB = await client.data.getUserDB(message.author.id);
	const data = {};
	data.guild = guildDB;
	data.user = userDB;

	// check if user is blacklisted

	if (data.user.blacklisted) return;

	// AFK thingy

	if (userDB.is_afk) {
		await client.data.removeAfk(message.author.id);
		message.channel.send(Discord.Util.removeMentions('Welcome back **' + message.author.username + '**! You are no longer afk.'))
		// eslint-disable-next-line no-unused-vars
			.catch((error) => {
				return true;
			});
	}

	message.mentions.users.forEach(async (u) => {
		const userData = await client.data.getUserDB(u.id);
		if (userData.is_afk) {
			message.channel.send(`**${u.tag}** is currently afk for: **${userData.afkReason}**`)
			// eslint-disable-next-line no-unused-vars
				.catch((error) => {
					return true;
				});
		}
	});

	// Chatbot thingy

	if (data.guild.chatbot_enabled && data.guild.chatbot_channel == message.channel.id) {
		const badwords = ['nigger', 'nigga', 'nibba', 'nibber'];
		const bl_log_channel = client.channels.cache.get('809317042058035241');
		const reason = 'saying a blacklisted word.';
		if (badwords.some((word) => message.content.toLowerCase().includes(word))) {
			const blacklist = await client.data.blacklist(message.author.id, 'true', reason);
			const logEmbed = new Discord.MessageEmbed().setTitle('User Blacklisted').setDescription(`**${message.author.username}#${message.author.discriminator}** was blacklisted from using the bot.\n\nResponsible Moderator : **${message.author.username}**\n\nReason : **${blacklist.reason}** \n **message**: ${message.content}`).setFooter('Blacklist registered').setColor('RED').setTimestamp();
			bl_log_channel.send(logEmbed);
			message.author.send(`You have been blacklisted from using the bot! \n **Reason:** ${reason}\n **Moderator:** ${message.author.tag} \n**Join Weky Development to appeal:** https://discord.gg/Sr2U5WuaSN`).catch((err) => {
				message.channel.send(`${message.author.username} has DM's disabled. I was unable to send him a message - but blacklist has been registered!`);
				console.log(err);
				return;
			});
		}

		const channel = data.guild.chatbot_channel;
		if (!channel) return;
		const sChannel = message.guild.channels.cache.get(channel);
		if (message.author.bot || sChannel.id !== message.channel.id) return;
		sChannel.startTyping();
		if(!message.content) return sChannel.stopTyping();
		try {
			const basefetch = await fetch(`${chatbase}/chatbot?message=${encodeURIComponent(message.content)}&botname=${encodeURIComponent('Weky')}&ownername=${encodeURIComponent('Face')}&user=${message.author.id}`, {});
			const response = await basefetch.json();
			message.reply(response.message);
		}
		catch (e) {
			message.reply('Something went wrong! Please report it on our support server https://discord.gg/Sr2U5WuaSN');
			console.log(e);
			return sChannel.stopTyping;
		}
		sChannel.stopTyping();
	}
	if (message.author.bot) return;

	// Ping Embed
	// Get prefix from guild else get from config file
	const prefixx = !guildDB.prefix ? config.prefix : guildDB.prefix;
	if (!message.author.bot && message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
		const m = new Discord.MessageEmbed()
			.setTitle('Hi, I\'m Weky !')
			.setDescription('A currrncy bot on Discord !')
			.addField('Prefix and Usage', 'My prefixes are ' + `\`${prefixx}\` and <@${client.user.id}>` + `\n *Tip: Run \`${prefixx}help\` to get started! | use \`${prefixx}setprefix <prefix>\` to change prefix!*`)
			.addField('Invites :', '[Support server](https://discord.gg/Sr2U5WuaSN) | [Bot invite](https://discord.com/oauth2/authorize?client_id=809496186905165834&permissions=1609952503&scope=bot%20applications.commands)')
			.setColor('RANDOM');
		message.channel.send(m);
	}
	// Basic command checks and argument definitions

	const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
	const prefix = !message.author.client && message.content.match(prefixMention) ? !message.author.bot && message.content.match(prefixMention)[0] : prefixx;

	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	let command = args.shift().toLowerCase();

	// Command Handler Dynamic Checks

	if (client.aliases.has(command)) {
		command = client.commands.get(client.aliases.get(command)).help.name;
	}

	const commandFile = client.commands.get(command);

	if (!commandFile) return;
	// if(client.commands.get(command).config.category === 'Actions') return message.channel.send('due to some difficulties, Actions commands are disabled for atleast a day, please join discord.gg/d98jT3mgxf for updates (we also do premium giveaways)');
	if (client.commands.get(command).config.developers == true) {
		if (data.user.developer == false) {
			return utils.errorEmbed(message, ':warning: This command is restricted only to bot owners.');
		}
	}

	if (client.commands.get(command).config.restricted == true) {
		if (data.user.moderator == false) {
			return utils.errorEmbed(message, ':warning: This command is restricted only to bot moderators / owners.');
		}
	}

	if (client.commands.get(command).config.disable == true) {
		return utils.errorEmbed(message, ':warning: This command is disabled for a short period of time! :warning:');
	}

	if (client.commands.get(command).config.args == true) {
		if (!args[0]) {
			return utils.errorEmbed(message, `Invalid arguments. Use: ${prefix + 'help ' + client.commands.get(command).help.name}`);
		}
	}

	// Core Command Handler and Cooldown Checks

	const cooldown = client.commands.get(command).config.cooldown;
	const pcooldown = client.commands.get(command).config.cooldown / 2;

	const timestamps = client.cooldowns.get(command);
	if (timestamps.has(message.author.id)) {
		if(data.user.premium == true) {
			const expirationTime = timestamps.get(message.author.id) + pcooldown;
			if (Date.now() < expirationTime) {
				const timeLeft = utils.timer(expirationTime);
				return message.channel.send(new Discord.MessageEmbed().setTitle(`${message.author.username}, wait...`).setDescription(`This command is on cooldown for **${timeLeft}** \nThe default cooldown for this command is **\`${utils.timer(cooldown + Date.now())}\`** but since you are a [donator](https://www.patreon.com/weky), you only need to wait for **\`${utils.timer(pcooldown + Date.now())}!\`**`).setColor('RED'));
			}
		}
		else {
			const expirationTime = timestamps.get(message.author.id) + cooldown;
			if (Date.now() < expirationTime) {
				const timeLeft = utils.timer(expirationTime);
				return message.channel.send(new Discord.MessageEmbed().setTitle(`${message.author.username}, wait...`).setDescription(`This command is on cooldown for **${timeLeft}** \nThe default cooldown for this command is **\`${utils.timer(cooldown + Date.now())}\`** but for [__**donators**__](https://www.patreon.com/weky), its only **\`${utils.timer(pcooldown + Date.now())}\` !**`).setColor('RED'));
			}
		}
	}

	// Command Logs

	if (commandFile) {
		try {
			if (client.user.id === '809496186905165834') {
				if (!command) return;
				const m = new Discord.MessageEmbed().setTitle(`Command used in ${message.guild.name}`).setColor('RANDOM').addField('User:', `${message.author.tag}`).addField('User ID:', `${message.author.id}`).addField('Command:', `${command}`).addField('Message Content:', `${message.content}`).addField('Guild ID:', `${message.guild.id}`).setImage(message.author.displayAvatarURL({ format: 'jpg'}))
				await cmdhook.send(m);
			}
			await timestamps.set(message.author.id, Date.now());
			setTimeout(
				async () => await timestamps.delete(message.author.id), cooldown);
			await commandFile.run(client, message, args, utils, data);
			client.ADDcmdsUSED(message.author.id)
		}
		catch (error) {
			// Command Errors
			if (client.user.id === '809496186905165834') {
				const errEmbed = new Discord.MessageEmbed().setTitle(`Command error in ${message.guild.name}`).addField('Additional Details', `**Guild ID :** ${message.guild.id}\n**Author :** ${message.author.tag}(${message.author.id})\n**Command :** ${commandFile.help.name}\n**Content :** ${message.content}`, false).setDescription(`**Error:**\n\`\`\`js\n${error}\n\`\`\``).setTimestamp();
				errhook.send(errEmbed);
			}
			return message.channel.send(new Discord.MessageEmbed().setTitle('Something went wrong!').setDescription('Please report it in [our server](https://discord.gg/Sr2U5WuaSN)').setColor('RED'));
		}
	}
};
