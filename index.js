const Discord = require('discord.js');
const unhhook = new Discord.WebhookClient(process.env.unhandled_rejection_webhook_id, process.env.command_webhook_token);


const Weky = require('./util/Weky');
const client = new Weky({ disableMentions: 'everyone' }, {fetchAllMembers: true});
require(`./reply`)
require('./currencyFunctions')(client)
require('dotenv').config()
client.start(process.env.token, process.env.MONGO);

// For any unhandled errors
let port = process.env.PORT || 8080
const top = require('top.gg-core');
const webhook = new top.Webhook(process.env.topgg_pass);
const topgger = new top.Client(process.env.topgg_token);
const eco = require('./schemas/Money')
const express = require('express');
const app = express();
app.post('/topggVote', webhook.advanced(), (req, res) => {
    let user = client.users.cache.get(req.vote.user)
    eco.findOne({ id: req.vote.user }, async(err, data) => {
        if(err) console.log(err)
        if(data){
        const inventory = require("./schemas/inventory")
        inventory.findOne({User: req.vote.user},(err, b) => {
          if(!b) {
            client.createProfile(req.vote.user).then(() => {
            if(req.vote.isWeekend === false){
                b.SpaceScript += 3
                b.CommonBox += 2
                b.save()
                data.Wallet += 30000
                data.save().then(() => {
                    try{
                    user.send(
                    'Thanks for voting for me!\n**Rewards**~~\n'+
                    '- <:common_box:832589376746815499> 2 Common Boxes \n'+
                    '- <:spacescript:814122006437167134> 3 Space Script \n'+
                    '- 40000 coins\n'
)
client.channels.cache.get('830799737967738910').send('**'+user.tag+ '** voted for me on top.gg. I have now `' + topgger.votes() + '` votes!')
                    }catch(e){
                        return;
                    }
                })
            }else{
                b.SpaceScript += 4
                b.CommonBox += 5
                b.save()
                data.Wallet += 50000
                data.save().then(() => {
                    try{
                    user.send(
                    'Thanks for voting for me!\n**Rewards**~~\n'+
                    '- <:common_box:832589376746815499> 5 Common Boxes (2 bonus from weekend)\n'+
                    '- <:spacescript:814122006437167134> 4 Space Script (1 bonus from weekend)\n'+
                    '- 50000 coins (10000 bonus from weekend)\n'
)
client.channels.cache.get('830799737967738910').send('**'+user.tag+ '** voted for me on top.gg. And got more rewards because of weekend. I have now `' + topgger.votes() + '` votes!')
                    }catch(e){
                        return;
                    }
                })
            }
            })
          } else {
            if(req.vote.isWeekend === false){
                b.SpaceScript += 3
                b.CommonBox += 2
                b.save()
                data.Wallet += 30000
                data.save().then(() => {
                    try{
                    user.send(
                    'Thanks for voting for me!\n**Rewards**~~\n'+
                    '- <:common_box:832589376746815499> 2 Common Boxes \n'+
                    '- <:spacescript:814122006437167134> 3 Space Script \n'+
                    '- 40000 coins\n'
)
client.channels.cache.get('830799737967738910').send('**'+user.tag+ '** voted for me on top.gg. I have now `' + topgger.votes() + '` votes!')
                    }catch(e){
                        return;
                    }
                })
            }else{
                b.SpaceScript += 4
                b.CommonBox += 5
                b.save()
                data.Wallet += 50000
                data.save().then(() => {
                    try{
                    user.send(
                    'Thanks for voting for me!\n**Rewards**~~\n'+
                    '- <:common_box:832589376746815499> 5 Common Boxes (2 bonus from weekend)\n'+
                    '- <:spacescript:814122006437167134> 4 Space Script (1 bonus from weekend)\n'+
                    '- 50000 coins (10000 bonus from weekend)\n'
)
client.channels.cache.get('830799737967738910').send('**'+user.tag+ '** voted for me on top.gg. And got more rewards because of weekend. I have now `' + topgger.votes() + '` votes!')
                    }catch(e){
                        return;
                    }
                })
            }
          }
        })
        } else {
          client.createBalance(req.vote.user)
        }
          })
});

app.listen(port, () => {
    console.log('App listening on port 8080');
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