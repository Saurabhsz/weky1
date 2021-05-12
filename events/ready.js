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
   
   webhook.login('/topggVote', '3000'); //you can edit the port (only numbers) NOTE: PUT .login METHOD BEFORE THE .on('vote') METHOD
   
   webhook.on('vote', vote => {
     console.log(`User id: ${vote.user}\nAll data: ${vote}\nTotal votes: ${votes}`);
   });
       client.user.setActivity(`Playing in ${client.guilds.cache.size} servers with ${client.users.cache.size} users | ..vote`, {type: "PLAYING"});
    }