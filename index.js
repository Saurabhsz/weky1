const Discord = require('discord.js');
const unhhook = new Discord.WebhookClient(process.env.unhandled_rejection_webhook_id, process.env.command_webhook_token);


const Weky = require('./utils/Weky');
const client = new Weky({ disableMentions: 'everyone' }, {fetchAllMembers: true});
require(`./reply`)
require('./currencyFunctions')(client)
client.start(process.env.token, process.env.mongo);

// For any unhandled errors

process.on('unhandledRejection', async (err) => {
	if (client.user) {
		if (client.user.id === '809496186905165834') {
			const errEmbed = new Discord.MessageEmbed().setTitle('unhandledRejection Error').setDescription(err.stack, { code: 'ini' }).setTimestamp();
			unhhook.send(errEmbed);
		}
	}
	return console.log(err);
});