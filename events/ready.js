//ready event (ready.js)
module.exports = (bot, message) => {
       bot.user.setActivity(`Playing in ${bot.guilds.cache.size} servers with ${bot.users.cache.size} users | ..vote`, {type: "PLAYING"});
    }