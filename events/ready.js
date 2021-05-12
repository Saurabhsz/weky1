//ready event (ready.js)
module.exports = async (client, message) => {
  const top = require('top.gg-core');

  const topgg = new top.Client(process.env.topgg_token);
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
  
      client.user.setActivity(`Playing in ${client.guilds.cache.size} servers with ${client.users.cache.size} users | ..vote`, {type: "PLAYING"});
   }