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
  var http = require('http'); //importing http

function startKeepAlive() {
    setInterval(function() {
        var options = {
            host: 'weky123.herokuapp.com',
            port: 8080,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }, 20 * 60 * 1000); // load every 20 minutes
}

startKeepAlive();
      client.user.setActivity(`Playing in ${client.guilds.cache.size} servers with ${client.users.cache.size} users | ..vote`, {type: "PLAYING"});
   
    }