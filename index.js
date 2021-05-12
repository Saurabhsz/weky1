const Discord = require('discord.js');
const unhhook = new Discord.WebhookClient(process.env.unhandled_rejection_webhook_id, process.env.command_webhook_token);


const Weky = require('./util/Weky');
const client = new Weky({ disableMentions: 'everyone' }, {fetchAllMembers: true});
require(`./reply`)
require('./currencyFunctions')(client)
require('dotenv').config()
client.start(process.env.token, process.env.MONGO);

// For any unhandled errors

const top = require('top.gg-core');
const webhook = new top.Webhook(process.env.topgg_pass);

const express = require('express');
const app = express();
 
app.post('/topggVote', webhook.advanced(), (req, res) => {
    console.log(req.vote);
});
   
app.listen('3000', () => {
    console.log('App listening on port 3000');
});

process.on('unhandledRejection', async (err) => {
    if (client.user) {
        if (client.user.id === '809496186905165834') {
            const errEmbed = new Discord.MessageEmbed().setTitle('unhandledRejection Error').setDescription(err.stack, { code: 'ini' }).setTimestamp();
            unhhook.send(errEmbed);
        }
    }
    return console.log(err);
});