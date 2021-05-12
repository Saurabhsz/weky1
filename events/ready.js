//ready event (ready.js)
module.exports = async (client, message) => {
   const top = require('top.gg-core');

   const topgg = new top.Client(process.env.topgg_token);
   const webhook = new top.Webhook(process.env.topgg_pass);
   let votes = await topgg.votes(); 
     topgg.post({
       servers: client.guilds.cache.size
     });
   
     setInterval(() => {
       topgg.post({
         servers: client.guilds.cache.size
       });
     }, 3600000);
   
   topgg.on('posted', data => {
     console.log(data);
   });
   
   
   const express = require('express');
   const app = express();
   
   app.post('/topggVote', webhook.advanced(), (req, res) => {
       console.log(req.vote);
   });
   
   app.listen('3000', () => {
       console.log('App listening on port 3000');
   });
       client.user.setActivity(`Playing in ${client.guilds.cache.size} servers with ${client.users.cache.size} users | ..vote`, {type: "PLAYING"});
    }